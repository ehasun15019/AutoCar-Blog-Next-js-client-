import PrivateRoute from "@/Components/Routes/PrivateRoutes";

const SellCarPage = () => {
    return(
        <div>
            <p>hello</p>
        </div>
    )
};

export default function pageWrapper() {
    return(
       <PrivateRoute>
        <SellCarPage />
       </PrivateRoute>
    )
}