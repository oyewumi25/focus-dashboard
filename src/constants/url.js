const base_url = "http://localhost:9001/";

const loginAdmin = "admin/login";

const createUser = "user/create-user";
const getAllUsersActifs = "user/get-all-users-actifs";
const getAllUsersInactifs = "user/get-all-users-inactifs";

const getAllVendorsActifs = "vendor/get-all-vendors-actifs";  
const getAllVendorsInactifs = "vendor/get-all-vendors-inactifs";

const getAllDelivermenActifs = "deliverman/get-all-delivermen-actifs";
const getAllDelivermansInactifs = "deliverman/get-all-delivermans-inactifs";

const getAllAdminsActifs = "Admin/get-all-admins-actifs";
const getAllAdminsInactifs = "Admin/get-all-admins-inactifs";

const getAllCategoriesActifs = "category/get-all-categories-actifs"
const getAllCategoriesInactifs ="category/get-all-categories-inactifs"
const getAllSubCategoriesActifs= "sub_category/get-all-actifs"
const getAllSubCategoriesInactifs="sub_category/get-all-inactifs"
const getAllSubSubCategoriesActifs = "sub_sub_category/get-all-actifs"
const getAllSubSubCategoriesInactifs= "sub_sub_category/get-all-inactifs"

const getAllArticlesActifs = "article/get-all-actifs"
const getAllArticlesInactifs = "article/get-all-inactifs"

const getAllCountriesActifs ="country/get-all-actifs"
const getAllCountriesInactifs ="country/get-all-inactifs"

const getAllBackOrders= "order/get-all-back-orders"
const getAcceptedOrders = "order/get-all-accepted-orders"
const getReadyOrders = "order/get-all-ready-orders"
const getTrackingOrders= "order/get-all-tracking-orders"
const getAllOrdersDelevered = "order/get-all-delevred-orders"
const getAllCancelOrders = "order/get-all-cancel-orders"

const getAllpermissions = "permission/get-all"

const getAllroles = "role/get-all"

const getAllCartesActives = "cart/get/all-actives"
const getAllCartesInactives = "cart/get/all-inactives"
const getAllCartes = "cart/get-all"

const getAllRating = "rating/get-all"
const getAllRatingActifs = "carte/get/all-actifs"
const getAllRatingInactifs = "carte/get/all-inactifs"

export {
    base_url,
    getAllVendorsActifs
    ,getAllUsersActifs,
    getAllUsersInactifs,
    getAllRatingActifs,
    getAllRating,
    getAllRatingInactifs,
    getAllVendorsInactifs,
    getAllDelivermenActifs,
    getAllDelivermansInactifs,
    createUser,
    getAllroles,
    getAllpermissions,
    loginAdmin,
    getAllAdminsActifs,
    getAllAdminsInactifs,
    getAllCategoriesActifs,
    getAllCategoriesInactifs,
    getAllSubCategoriesActifs,
    getAllSubCategoriesInactifs,
    getAllSubSubCategoriesActifs,
    getAllSubSubCategoriesInactifs,
    getAllArticlesActifs,
    getAllArticlesInactifs,
    getAllCountriesActifs,
    getAllCountriesInactifs,
    getAllBackOrders,
    getReadyOrders,
    getAcceptedOrders,
    getTrackingOrders,
    getAllOrdersDelevered,
    getAllCancelOrders,
    getAllCartesActives,
    getAllCartesInactives,
    getAllCartes,
   
}