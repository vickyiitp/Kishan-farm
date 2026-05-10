import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Eye, TrendingUp, Users, CheckCircle, Clock } from 'lucide-react';

const data = [
  { name: 'Jan', views: 4000, inquiries: 2400 },
  { name: 'Feb', views: 3000, inquiries: 1398 },
  { name: 'Mar', views: 2000, inquiries: 9800 },
  { name: 'Apr', views: 2780, inquiries: 3908 },
  { name: 'May', views: 1890, inquiries: 4800 },
  { name: 'Jun', views: 2390, inquiries: 3800 },
  { name: 'Jul', views: 3490, inquiries: 4300 },
];

export default function SellerDashboard() {
  return (
    <div className="flex-1 bg-beige-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="font-display text-3xl font-bold text-forest-900 mb-2">Seller Dashboard</h1>
            <p className="text-forest-600 font-medium">Welcome back, Vedant. Here's your property portfolio performance.</p>
          </div>
          <button className="bg-forest-900 text-white px-6 py-2.5 rounded-xl font-bold shadow-md hover:bg-forest-800 transition-colors">
            Generate AI Report
          </button>
        </div>

        {/* Top KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[
            { title: 'Total Views', val: '45,231', icon: Eye, trend: '+12%', color: 'text-blue-600', bg: 'bg-blue-100' },
            { title: 'Active Listings', val: '8', icon: CheckCircle, trend: 'Stable', color: 'text-green-600', bg: 'bg-green-100' },
            { title: 'Inquiries', val: '124', icon: Users, trend: '+24%', color: 'text-gold-600', bg: 'bg-gold-100' },
            { title: 'Avg. AI Score', val: '88/100', icon: TrendingUp, trend: '+3 pts', color: 'text-purple-600', bg: 'bg-purple-100' },
          ].map((kpi, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-beige-200 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${kpi.bg}`}>
                  <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
                </div>
                <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded">{kpi.trend}</span>
              </div>
              <h3 className="text-forest-600 font-bold mb-1">{kpi.title}</h3>
              <p className="font-display text-3xl font-bold text-forest-900">{kpi.val}</p>
            </div>
          ))}
        </div>

        {/* Charts & Secondary widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          
          <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-beige-200 shadow-sm">
            <h3 className="font-display text-xl font-bold text-forest-900 mb-6">Engagement Overview</h3>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1d7246" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#1d7246" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E8E2C8" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#165333', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#165333', fontSize: 12}} dx={-10} />
                  <RechartsTooltip cursor={{stroke: 'rgba(29, 114, 70, 0.2)', strokeWidth: 2}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} />
                  <Area type="monotone" dataKey="views" stroke="#1d7246" strokeWidth={3} fillOpacity={1} fill="url(#colorViews)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-beige-200 shadow-sm flex flex-col">
            <h3 className="font-display text-xl font-bold text-forest-900 mb-6">Recent Inquiries</h3>
            <div className="flex-1 space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-start gap-4 pb-4 border-b border-beige-100 last:border-0">
                  <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-900 font-bold shrink-0">
                    B{i}
                  </div>
                  <div>
                    <p className="font-bold text-forest-900 text-sm">Interest in "Pune Farm"</p>
                    <p className="text-xs text-forest-600 line-clamp-1 mb-1">"Is the price negotiable for immediate payment?"</p>
                    <p className="text-xs text-forest-400 font-medium flex items-center"><Clock className="w-3 h-3 mr-1"/> 2 hours ago</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full py-2 bg-beige-100 text-forest-900 font-bold rounded-xl text-sm hover:bg-beige-200 transition-colors">View All Inquiries</button>
          </div>

        </div>

      </div>
    </div>
  );
}
