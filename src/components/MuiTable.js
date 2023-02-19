import React from 'react'

const MuiTable = () => {
  return (
    <div className='w-full flex justify-center items-center'>
     
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-white dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">
                            Sliver
                        </td>
                        <td class="px-6 py-4">
                            Laptop
                        </td>
                        <td class="px-6 py-4">
                            $2999
                        </td>
                        <td class="px-6 py-4 flex justify-center items-center gap-1">
                        <p class="font-medium text-white hover:underline px-4 py-1.5 bg-green-600 rounded-lg">Edit</p>
                        <p class="font-medium text-white hover:underline px-4 py-1.5 bg-red-600 rounded-lg">Delete</p>                        </td>
                    </tr>
                    <tr class="bg-white dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            Microsoft Surface Pro
                        </th>
                        <td class="px-6 py-4">
                            White
                        </td>
                        <td class="px-6 py-4">
                            Laptop PC
                        </td>
                        <td class="px-6 py-4">
                            $1999
                        </td>
                        <td class="px-6 py-4 flex justify-center items-center gap-1">
                        <p class="font-medium text-white hover:underline px-4 py-1.5 bg-green-600 rounded-lg">Edit</p>
                        <p class="font-medium text-white hover:underline px-4 py-1.5 bg-red-600 rounded-lg">Delete</p>

                        </td>
                    </tr>
                    <tr class="bg-white dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Magic Mouse 2
                        </th>
                        <td class="px-6 py-4">
                            Black
                        </td>
                        <td class="px-6 py-4">
                            Accessories
                        </td>
                        <td class="px-6 py-4">
                            $99
                        </td>
                        <td class="px-6 py-4 flex justify-center items-center gap-1">
                        <p class="font-medium text-white hover:underline px-4 py-1.5 bg-green-600 rounded-lg">Edit</p>
                        <p class="font-medium text-white hover:underline px-4 py-1.5 bg-red-600 rounded-lg">Delete</p>                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  
  )
}

export default MuiTable
