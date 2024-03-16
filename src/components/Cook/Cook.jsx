

const Cook = () => {
    return (
<div className="w-2/5 h-[695px] max-h-auto border-[1px] border-solid p-6 rounded-xl ">


<div className="h-[685px]">
            
            <h1 className="text-[#282828] text-2xl font-semibold text-center pb-4">Want to cook: 01</h1>
            <hr className="w-[60%] mx-auto" />
            
            <div className="flex py-6 pl-10">
            <h6>Name</h6>
            <h6 className="pr-12 pl-24">Time</h6>
            <h6>Calories</h6>
            
            </div>
            
            <h1 className="text-[#282828] text-2xl font-semibold text-center pb-4">Currently cooking: 02</h1>
            <hr className="w-[60%] mx-auto" />
            
            <div className="flex py-6 pl-10">
            <h6>Name</h6>
            <h6 className="pr-16 pl-32">Time</h6>
            <h6>Calories</h6>
            
            </div>
            
                    </div>

</div>
    );
};

export default Cook;