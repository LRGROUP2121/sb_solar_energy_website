export interface Vendor {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  contact: string;
  address: string;
  state?: string;
  district?: string;
  businessType: 'dealer' | 'distributor' | 'installer' | 'other';
  rating: number;
  status: 'Approved' | 'Pending' | 'Rejected';
  tags: string[];
  registeredAt: string;
}

const STORAGE_KEY = 'sb_solar_vendors';

export const INITIAL_VENDORS: Vendor[] = [
  {
    id: 'v-1',
    name: 'SunPower Solutions',
    contactPerson: 'Sunil Verma',
    email: 'sunil@sunpowersolutions.in',
    contact: '+91 9876543210',
    address: '123 Solar Park, Sitapura Industrial Area, Jaipur',
    state: 'Rajasthan',
    district: 'Jaipur',
    businessType: 'dealer',
    rating: 4.8,
    status: 'Approved',
    tags: ['Certified Dealer', 'On-Grid', 'Commercial'],
    registeredAt: '2026-09-15T10:30:00Z'
  },
  {
    id: 'v-2',
    name: 'EcoGreen Energy',
    contactPerson: 'Priya Sharma',
    email: 'priya@ecogreenenergy.com',
    contact: '+91 9876543211',
    address: 'Phase 2, Techno Hub, Jodhpur',
    state: 'Rajasthan',
    district: 'Jodhpur',
    businessType: 'distributor',
    rating: 4.5,
    status: 'Approved',
    tags: ['Regional Distributor', 'Residential', 'Hybrid'],
    registeredAt: '2026-09-20T14:15:00Z'
  },
  {
    id: 'v-3',
    name: 'BrightFuture Solar',
    contactPerson: 'Ramesh Patel',
    email: 'ramesh@brightfuturesolar.in',
    contact: '+91 9876543212',
    address: 'Main Market Road, Sikar',
    state: 'Rajasthan',
    district: 'Sikar',
    businessType: 'installer',
    rating: 4.9,
    status: 'Approved',
    tags: ['System Installer', 'Maintenance', 'Off-Grid'],
    registeredAt: '2026-10-01T09:00:00Z'
  },
  {
    id: 'v-4',
    name: 'Apex Green Technologies',
    contactPerson: 'Vikram Singh',
    email: 'vikram@apexsolar.com',
    contact: '+91 9829012345',
    address: 'Near Old Bus Stand, Bikaner',
    state: 'Rajasthan',
    district: 'Bikaner',
    businessType: 'dealer',
    rating: 4.7,
    status: 'Approved',
    tags: ['Certified Dealer', 'Residential', 'Agricultural'],
    registeredAt: '2026-10-05T11:45:00Z'
  },
  {
    id: 'v-5',
    name: 'Shree Balaji Solar Services',
    contactPerson: 'Mahesh Choudhary',
    email: 'balajisolar@gmail.com',
    contact: '+91 9414054321',
    address: 'Station Road, Nagaur',
    state: 'Rajasthan',
    district: 'Nagaur',
    businessType: 'installer',
    rating: 4.9,
    status: 'Approved',
    tags: ['System Installer', 'Pumps & Rooftop'],
    registeredAt: '2026-10-10T16:20:00Z'
  }
];

export const getStoredVendors = (): Vendor[] => {
  if (typeof window === 'undefined') return INITIAL_VENDORS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_VENDORS));
      return INITIAL_VENDORS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_VENDORS;
  } catch (e) {
    console.error('Error reading vendors from localStorage', e);
    return INITIAL_VENDORS;
  }
};

export const saveVendor = (vendorData: {
  name: string;
  contactPerson: string;
  email: string;
  contact: string;
  address: string;
  state?: string;
  district?: string;
  businessType: 'dealer' | 'distributor' | 'installer' | 'other';
  status?: 'Approved' | 'Pending' | 'Rejected';
  rating?: number;
  tags?: string[];
}): Vendor => {
  const current = getStoredVendors();
  
  const typeLabels: Record<string, string> = {
    dealer: 'Certified Dealer',
    distributor: 'Regional Distributor',
    installer: 'System Installer',
    other: 'Channel Partner'
  };

  const newVendor: Vendor = {
    id: `v-${Date.now()}`,
    name: vendorData.name,
    contactPerson: vendorData.contactPerson,
    email: vendorData.email,
    contact: vendorData.contact,
    address: vendorData.address,
    state: vendorData.state || '',
    district: vendorData.district || '',
    businessType: vendorData.businessType || 'dealer',
    rating: vendorData.rating ?? 5.0,
    status: vendorData.status ?? 'Approved',
    tags: vendorData.tags && vendorData.tags.length > 0 
      ? vendorData.tags 
      : [typeLabels[vendorData.businessType || 'dealer'] || 'Channel Partner', 'Verified Partner'],
    registeredAt: new Date().toISOString()
  };

  const updated = [newVendor, ...current.filter(v => v.id !== newVendor.id)];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('sb-vendors-updated', { detail: updated }));
  } catch (e) {
    console.error('Error saving vendor to localStorage', e);
  }

  return newVendor;
};

export const updateVendorStatus = (id: string, status: 'Approved' | 'Pending' | 'Rejected'): Vendor[] => {
  const current = getStoredVendors();
  const updated = current.map(v => v.id === id ? { ...v, status } : v);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('sb-vendors-updated', { detail: updated }));
  } catch (e) {
    console.error('Error updating vendor status', e);
  }
  return updated;
};

export const deleteVendor = (id: string): Vendor[] => {
  const current = getStoredVendors();
  const updated = current.filter(v => v.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('sb-vendors-updated', { detail: updated }));
  } catch (e) {
    console.error('Error deleting vendor', e);
  }
  return updated;
};
