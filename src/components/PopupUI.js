import React from 'react'

const PopupUI = ({status, text, textError}) => {
	console.log(status)
	console.log(textError)

  return (
	<div className="fixed inset-0 bg-gray-900 bg-opacity-50 w-full flex justify-center items-center md:ml-20">
		<div className="mt-3 text-center">
			<div className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full ${status==="success"? "bg-green-100": "bg-red-100"} `}>
				<svg
					className="h-6 w-6 text-green-600"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 13l4 4L19 7"
					></path>
				</svg>
			</div>
			<h3 className="text-lg leading-6 font-medium text-gray-900">{text}!</h3>
			<div className="mt-2 px-7 py-3">
				<p className="text-sm text-gray-500">
					{textError}!
				</p>
			</div>
			<div className="items-center px-4 py-3">
				<button
					id="ok-btn"
					className={`px-4 py-2 ${status==="success"? "bg-green-500 hover:bg-green-600 focus:ring-green-300": "bg-red-500 hover:bg-red-600 focus:ring-red-300"}   text-white text-base font-medium rounded-md w-full shadow-sm  focus:outline-none focus:ring-2 `}
				>
					OK
				</button>
			</div>
		</div>
	</div>
  )
}

export default PopupUI