import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, ShoppingBag, Users, Settings, Plus, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-5xl font-black text-white tracking-tight uppercase">Control <span className="text-brand-red">Center</span></h1>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] mt-2">Station: Alpha-1 | Status: Operational</p>
          </div>
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Add Equipment</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <StatCard title="Total Revenue" value="$42,390" icon={<TrendingUp className="text-green-500" />} change="+12.5%" />
          <StatCard title="Active Orders" value="156" icon={<ShoppingBag className="text-brand-red" />} change="+4.2%" />
          <StatCard title="Total Users" value="2,840" icon={<Users className="text-blue-400" />} change="+0.8%" />
          <StatCard title="System Health" value="100%" icon={<Settings className="text-brand-amber" />} change="Optimal" />
        </div>

        {/* Recent Activity */}
        <div className="glass-dark rounded-[2rem] border-white/5 overflow-hidden">
          <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/5">
            <h3 className="text-xl font-bold text-white">Critical Activity Log</h3>
            <button className="text-xs font-bold uppercase tracking-widest text-brand-red hover:underline">Download Report</button>
          </div>
          <div className="p-0 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] uppercase font-bold tracking-widest text-gray-500 border-b border-white/5">
                  <th className="px-8 py-6">Operative</th>
                  <th className="px-8 py-6">Action</th>
                  <th className="px-8 py-6">status</th>
                  <th className="px-8 py-6">Timestamp</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <ActivityRow user="John Wick" action="Order #4920 Placed" status="Pending" time="2 mins ago" />
                <ActivityRow user="Sarah Connor" action="New Product Added" status="Success" time="45 mins ago" />
                <ActivityRow user="System" action="Inventory Warning" status="Warning" time="1 hour ago" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, change }) => (
  <motion.div whileHover={{ scale: 1.02 }} className="glass-dark p-8 rounded-3xl border-white/5">
    <div className="flex items-center justify-between mb-4">
      <div className="p-3 bg-white/5 rounded-2xl">{icon}</div>
      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-md">{change}</span>
    </div>
    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{title}</p>
    <h4 className="text-3xl font-black text-white">{value}</h4>
  </motion.div>
);

const ActivityRow = ({ user, action, status, time }) => (
  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
    <td className="px-8 py-6">
      <div className="flex items-center space-x-3">
        <div className="h-8 w-8 rounded-full bg-brand-red/20 flex items-center justify-center text-[10px] font-bold text-brand-red">
          {user.split(' ').map(n => n[0]).join('')}
        </div>
        <span className="text-white font-medium">{user}</span>
      </div>
    </td>
    <td className="px-8 py-6 text-gray-400">{action}</td>
    <td className="px-8 py-6">
      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
        status === 'Success' ? 'bg-green-500/20 text-green-500' : 
        status === 'Pending' ? 'bg-brand-amber/20 text-brand-amber' : 
        'bg-brand-red/20 text-brand-red'
      }`}>
        {status}
      </span>
    </td>
    <td className="px-8 py-6 text-gray-600 font-mono text-[10px]">{time}</td>
  </tr>
);

export default AdminDashboard;
