import { useState } from "react"
import Calendar from "../Calendar/Calendar"
import EmptyForm from "../EmptyForm/EmptyForm"
import Form from "../Form/Form"


const monthPlan = () => {
  // const [day, setDay]= useState(undefined)

    return (
      <div className="flex flex-row p-8 gap-6">
        <Form />
        <Calendar />
      </div>
    )
  }
  

export default monthPlan