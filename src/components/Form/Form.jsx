

const Form = () => {
  return (
    <div className="
            border-2 border-red-500
            flex flex-col justify-center
            w-1/4
            ">

        <div>
            <h1>01</h1>
            <p>Week 1</p>
        </div>

        <div className="">
            <form action="">
                <select name="type" id="type">
                    <option value="">Type</option>
                    <option value="interval">Interval</option>
                    <option value="recovery">Recovery</option>
                    <option value="elevation">Elevation</option>
                    <option value="consistancy">Consistency</option>
                </select>

                <div className="border-2 border-red-200 w-5/6">
                    <h3>Intervals</h3>
                    <div className="grid grid-cols-3">
                        <h4>Times</h4>
                        <h4>Duration</h4>
                        <h4>Rest</h4>
                        
                        <input type="number" placeholder="5" className="w-24"/>
                        <input type="number" placeholder="20s" className="w-24"/>
                        <input type="number" placeholder="120s" className="w-24"/>
                    </div>
                </div>

                
            </form>
        </div>

        <div>
            <input type="number" placeholder="Goal Time"/>
        </div>

        <div>
            <input type="number" placeholder="Distance"/>
        </div>
    </div>
  )
}

export default Form