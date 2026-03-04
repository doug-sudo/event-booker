import { Outlet } from 'react-router-dom'
import AdminSidebar from '../admin/AdminSidebar'

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-bg-page">
      <AdminSidebar />
      <main className="flex-1 ml-0 lg:ml-64 p-6">
        <Outlet />
      </main>
    </div>
  )
}
