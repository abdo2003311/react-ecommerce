import { useQuery } from "@apollo/client";
import { copyObj } from "../functions";
import { GET_USER_CART } from "../gql/cart";

let useUserCarts = (userId) => {

    let { loading, error, data } = useQuery(GET_USER_CART,
    {
        notifyOnNetworkStatusChange : true,
        variables : {
            userId
        }
    });

    let carts = [];

    if (!loading && !error) {
        carts = copyObj(data.carts);
    }
    
    return { carts, loading, error };

}

export default useUserCarts;