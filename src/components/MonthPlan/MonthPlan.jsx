import Calendar from "../Calendar/Calendar"
import Form from "../Form/Form"


const monthPlan = () => {
  return (
    <div className="flex flex-row p-8 gap-6">
        <Form />
        <Calendar />
    </div>
  )
}

export default monthPlan