"use client"

// Propsを設定して使いまわせるようにしたい
const Sidebar = () => {
  return (
    <div className="lg:w-64 w-64 h-screen bg-gray-800 text-white fixed inset-0 lg:relative">
      <div className="h-full flex flex-col justify-between">
        <div className="p-4 space-y-4">
          <h2 className="text-2xl font-bold">管理画面</h2>
          <ul>
            <li className="p-2 hover:bg-gray-700 rounded">
              <a href="#">Dashboard</a>
            </li>
            <li className="p-2 hover:bg-gray-700 rounded">
              <a href="#">Settings</a>
            </li>
            <li className="p-2 hover:bg-gray-700 rounded">
              <a href="#">Profile</a>
            </li>
            <li className="p-2 hover:bg-gray-700 rounded">
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;