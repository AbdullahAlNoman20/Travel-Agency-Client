
const Packages = () => {
    return (
        <div>
            <div className=" py-5 grid grid-cols-3 gap-2">

            
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
	<img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">Place Name</h2>
			<p className="dark:text-gray-800">Little Description</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-900 dark:text-gray-50">View Details</button>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-red-600 dark:text-gray-50">Delete</button>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-green-600 dark:text-gray-50">Update</button>
	</div>
</div>
            </div>
        </div>
    );
};

export default Packages;