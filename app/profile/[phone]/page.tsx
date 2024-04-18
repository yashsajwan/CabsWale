import DriverDetailsPage from "@/components/driver-details-page"
const DriverDetails = async ({params} : {params : {phone : string}}) => {
  return (
    <DriverDetailsPage phone={params.phone}/>
  )
}

export default DriverDetails