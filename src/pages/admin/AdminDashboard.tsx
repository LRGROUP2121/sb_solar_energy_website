import { Users, Activity, MessageSquare, AlertTriangle } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
          <p className="text-sm text-slate-500">Overview of system activity and important metrics.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-slate-600">Total Users</h3>
            <Users className="h-5 w-5 text-indigo-500" />
          </div>
          <p className="text-3xl font-bold text-slate-900">1,248</p>
          <p className="text-xs text-emerald-600 mt-2 font-medium">+12% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-slate-600">Active Complaints</h3>
            <AlertTriangle className="h-5 w-5 text-rose-500" />
          </div>
          <p className="text-3xl font-bold text-slate-900">42</p>
          <p className="text-xs text-rose-600 mt-2 font-medium">15 pending action</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-slate-600">Open Tickets</h3>
            <MessageSquare className="h-5 w-5 text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-slate-900">89</p>
          <p className="text-xs text-slate-500 mt-2">Avg response time: 2h</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-slate-600">System Health</h3>
            <Activity className="h-5 w-5 text-emerald-500" />
          </div>
          <p className="text-3xl font-bold text-slate-900">99.9%</p>
          <p className="text-xs text-emerald-600 mt-2 font-medium">All services operational</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h2 className="font-semibold text-slate-800 mb-4">Recent User Registrations</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                    U{i}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">New User {i}</p>
                    <p className="text-xs text-slate-500">user{i}@example.com</p>
                  </div>
                </div>
                <span className="text-xs text-slate-400">2h ago</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h2 className="font-semibold text-slate-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 border border-slate-200 rounded-xl hover:border-indigo-500 hover:text-indigo-600 transition-colors flex flex-col items-center justify-center gap-2 text-slate-600">
              <Users className="h-6 w-6" />
              <span className="text-sm font-medium">Add User</span>
            </button>
            <button className="p-4 border border-slate-200 rounded-xl hover:border-indigo-500 hover:text-indigo-600 transition-colors flex flex-col items-center justify-center gap-2 text-slate-600">
              <AlertTriangle className="h-6 w-6" />
              <span className="text-sm font-medium">View Alerts</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
