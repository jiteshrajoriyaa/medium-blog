export const Visitor = () => {
    return <div className="flex-1 bg-gray-100 flex items-center justify-center p-6">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Visitor Purpose Only</h1>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
                            <th className="p-3">Sr. No</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Password</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600">
                        <tr className="border-t hover:bg-gray-50 transition">
                            <td className="p-3">1</td>
                            <td className="p-3">Alice</td>
                            <td className="p-3">alice@gmail.com</td>
                            <td className="p-3">alice123456</td>
                        </tr>
                        <tr className="border-t hover:bg-gray-50 transition">
                            <td className="p-3">2</td>
                            <td className="p-3">Bob</td>
                            <td className="p-3">bob@gmail.com</td>
                            <td className="p-3">bob123456</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
