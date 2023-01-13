import {UserSwitchOutlined,UserOutlined,UsergroupDeleteOutlined,ShoppingCartOutlined,AuditOutlined,
    TableOutlined,StarOutlined,ShoppingOutlined,RadarChartOutlined} from "@ant-design/icons"

import subCategory from "../tabs/categories/subcategory"
import SubSubCategory from "../tabs/categories/sub-sub-category"
import Category from "../tabs/categories/category"
import userActif from "../tabs/user/userActif"
import userInactif from "../tabs/user/userInactif"
import commandeAchévée from "../tabs/commandes/commandeAchévée"
import commandeInachévée from "../tabs/commandes/commandeInachévée"
import delivermanActif from "../tabs/deliverman/delivermanActif"
import delivermanInactif from "../tabs/deliverman/delivermanInactif"
import paysActif from "../tabs/country/countryActif"
import paysInactif from "../tabs/country/countryInactif"
import vendeurActif from "../tabs/vendeurs/vendeurActif"
import vendeurInactif from "../tabs/vendeurs/vendeurInactif"
import articleActif from "../tabs/articles/articleActif"
import articleInactif from "../tabs/articles/articleInactif"
import ratingActif from "../tabs/rating/ratingActif"
import ratingInactif from "../tabs/rating/ratingInactif"
import adminActif from "../tabs/admin/adminActif"
import adminInactif from "../tabs/admin/adminInactif"
import commandeALivrer from "../tabs/commandes/commande-pret-à-livrer"
import commandeEnAttente from "../tabs/commandes/commande-en-attente"
import commandePretALivrer from "../tabs/commandes/commande-pret-à-livrer"
import carteActive from "../tabs/card/cardActive"
import carteInactive from "../tabs/card/cardInactive"



const listMenu = [

    
    {
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"user-Actif",
        path:"/main/user-Actif",
        component: userActif,
       
    },
    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"carte-Active",
        path:"/main/carte-Active",
        component: carteActive,
       
    },

    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"carte-Inactive",
        path:"/main/carte-Inactive",
        component: carteInactive,
       
    },

    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"user-inactif",
        path:"/main/user-inactif",
        component: userInactif,
       
    },

    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"sub-category",
        path:"/main/sub-category",
        component:subCategory
       
    },
    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"category",
        path:"/main/category",
        component:Category
       
    },
    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"sub-sub-category",
        path:"/main/sub-sub-category",
        component: SubSubCategory
       
    },
    
    {   
        icon: <UserSwitchOutlined style= {{fontSize:20}}/>,
        label:"admin-Actif",
        path:"/main/admin-Actif",
        component: adminActif,
       
    },
   
    {   
        icon: <AuditOutlined style= {{fontSize:20}}/>, 
        label:"deliverman-actif",
        path:"/main/deliverman-actif",
        component: delivermanActif,
       
    },
    {   
        icon: <AuditOutlined style= {{fontSize:20}}/>, 
        label:"deliverman-inactif",
        path:"/main/deliverman-inactif",
        component: delivermanInactif,
       
    },
    
   

    {   
        icon: <ShoppingCartOutlined style= {{fontSize:20}}/>, 
        label:"commandes-achévée",
        path:"/main/commandes-achévée",
        component: commandeAchévée,  
    },
    {   
        icon: <ShoppingCartOutlined style= {{fontSize:20}}/>, 
        label:"commandes-à-livrer",
        path:"/main/commandes-à-livrer",
        component: commandeALivrer,  
    },
    {   
        icon: <ShoppingCartOutlined style= {{fontSize:20}}/>, 
        label:"commandes-en-attente",
        path:"/main/commandes-en-attente",
        component: commandeEnAttente,  
    },
    {   
        icon: <ShoppingCartOutlined style= {{fontSize:20}}/>, 
        label:"commandes-pret-à-liver",
        path:"/main/commandes-pret-à-livrer",
        component: commandePretALivrer,  
    },

    {   
        icon: <ShoppingCartOutlined style= {{fontSize:20}}/>, 
        label:"commandes-inachévée",
        path:"/main/commandes-inachévée",
        component: commandeInachévée,
       
    },
    
    
     
    {   
        icon: <ShoppingOutlined  style= {{fontSize:20}}/>,
        label:"articles-Actif",
        path:"/main/articles-Actif",
        component: articleActif,
       
    },
    {   
        icon: <ShoppingOutlined  style= {{fontSize:20}}/>,
        label:"articles-Inactif",
        path:"/main/articles-Inactif",
        component: articleInactif,
       
    },
    
    {   
        icon: <UserSwitchOutlined style= {{fontSize:20}}/>,
        label:"paysActif",
        path:"/main/pays-Actif",
        component: paysActif,
       
    },

    {   
        icon: <UserSwitchOutlined style= {{fontSize:20}}/>,
        label:"paysInactif",
        path:"/main/pays-Inactif",
        component: paysInactif,
       
    },

    

    {   
        icon: <StarOutlined  style= {{fontSize:20}}/>, 
        label:"rating-Actif",
        path:"/main/rating-Actif",
        component: ratingActif,
       
    },
    {   
        icon: <StarOutlined  style= {{fontSize:20}}/>, 
        label:"rating-Inactif",
        path:"/main/rating-Inactif",
        component: ratingInactif,
       
    },

  
    {
        icon: <RadarChartOutlined  style= {{fontSize:20}} />,
        label:"vendeurs-Actif",
        path:"/main/vendeurs-Actif",
        component: vendeurActif
    },
    {
        icon: <RadarChartOutlined  style= {{fontSize:20}} />,
        label:"vendeur-Inactif",
        path:"/main/vendeur-Inactif",
        component: vendeurInactif
    },

    


]   
export{listMenu}