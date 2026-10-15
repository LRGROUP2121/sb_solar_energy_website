import { Save, Bell, Shield, Database, Globe } from 'lucide-react';

const SystemSettings = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">System Settings</h1>
        <p className="text-sm text-slate-500">Configure global application preferences.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* Settings Sidebar */}
          <div className="w-full md:w-64 bg-slate-50 border-r border-slate-200 p-4 space-y-2 shrink-0">
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-sm border border-slate-200 text-indigo-700 font-medium text-sm">
              <Globe className="h-4 w-4" /> General
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors font-medium text-sm">
              <Bell className="h-4 w-4" /> Notifications
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors font-medium text-sm">
              <Shield className="h-4 w-4" /> Security
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors font-medium text-sm">
              <Database className="h-4 w-4" /> Backup
            </button>
          </div>

          {/* Settings Content */}
          <div className="flex-1 p-6 md:p-8 space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 mb-4 border-b border-slate-100 pb-2">General Settings</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                  <input type="text" defaultValue="SB Solar Energy" className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Support Email</label>
                  <input type="email" defaultValue="support@sbsolar.com" className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Support Phone</label>
                  <input type="text" defaultValue="+91 7023204664" className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900 mb-4 border-b border-slate-100 pb-2">Maintenance Mode</h2>
              <div className="flex items-center justify-between p-4 bg-amber-50 border border-amber-100 rounded-xl">
                <div>
                  <p className="text-sm font-semibold text-amber-900">Enable Maintenance Mode</p>
                  <p className="text-xs text-amber-700 mt-1">This will prevent customers from logging in.</p>
                </div>
                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-slate-300 appearance-none cursor-pointer transition-transform" />
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-300 cursor-pointer"></label>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex justify-end gap-3">
              <button className="px-5 py-2.5 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                Cancel
              </button>
              <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-sm">
                <Save className="h-4 w-4" /> Save Changes
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;
