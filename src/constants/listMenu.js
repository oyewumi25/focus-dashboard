import {UserSwitchOutlined,UserOutlined,UsergroupDeleteOutlined,ShoppingCartOutlined,AuditOutlined,
    TableOutlined,StarOutlined,ShoppingOutlined,RadarChartOutlined} from "@ant-design/icons"
import User from "../tabs/user"
import Admin from "../tabs/admin"
import Deliverman from "../tabs/deliverman"
import Order from "../tabs/order"
import Vendor from "../tabs/vendor"
import Rating from "../tabs/rating"
import Country from "../tabs/country"
import Article from "../tabs/article"
import sousCategory1 from "../tabs/categories/souscategorie1"
import sousCategory2 from "../tabs/categories/souscategory2"
import Category from "../tabs/categories/category"
import utilisateurActif from "../tabs/utilisateurs/utilisateurActif"
import utilisateurInactif from "../tabs/utilisateurs/utilisateurInactif"
import commandeAchévée from "../tabs/commandes/commandeAchévée"
import commandeInachévée from "../tabs/commandes/commandeInachévée"
import livreursActif from "../tabs/livreurs/livreurActif"
import livreursInactif from "../tabs/livreurs/livreurInactif"
import paysActif from "../tabs/pays/paysActif"
import paysInactif from "../tabs/pays/paysInactif"
import vendeurActif from "../tabs/vendeurs/vendeurActif"
import vendeurInactif from "../tabs/vendeurs/vendeurInactif"
import articleActif from "../tabs/articles/articleActif"
import articleInactif from "../tabs/articles/articleInactif"
import ratingActif from "../tabs/rating/ratingActif"
import ratingInactif from "../tabs/rating/ratingInactif"
import adminActif from "../tabs/admin/adminActif"
import adminInactif from "../tabs/admin/adminInactif"

const listMenu = [
    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"user",
        path:"/main/user",
        component: User,
       
    },
    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"utilisateur-Actif",
        path:"/main/utilisateur-Actif",
        component: utilisateurActif,
       
    },

    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"utilisateur-inactif",
        path:"/main/utilisateur-inactif",
        component: utilisateurInactif,
       
    },

    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"souscategory1",
        path:"/main/souscategory1",
        component:sousCategory1
       
    },
    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"category",
        path:"/main/category",
        component:Category
       
    },
    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"souscategory2",
        path:"/main/souscategory2",
        component: sousCategory2
       
    },
    {   
        icon: <UserSwitchOutlined style= {{fontSize:20}}/>,
        label:"admin",
        path:"/main/admin",
        component: Admin,
       
    },
    {   
        icon: <UserSwitchOutlined style= {{fontSize:20}}/>,
        label:"admin-Actif",
        path:"/main/admin-Actif",
        component: adminActif,
       
    },
    {   
        icon: <AuditOutlined style= {{fontSize:20}}/>, 
        label:"deliverman",
        path:"/main/deliverman",
        component: Deliverman,
       
    },
    {   
        icon: <AuditOutlined style= {{fontSize:20}}/>, 
        label:"livreurs-actif",
        path:"/main/livreurs-actif",
        component: livreursActif,
       
    },
    {   
        icon: <AuditOutlined style= {{fontSize:20}}/>, 
        label:"livreurs-inactif",
        path:"/main/livreurs-inactif",
        component: livreursInactif,
       
    },
    
    {   
        icon: <ShoppingCartOutlined style= {{fontSize:20}}/>, 
        label:"order",
        path:"/main/order",
        component: Order,
       
    },
    {   
        icon: <ShoppingCartOutlined style= {{fontSize:20}}/>, 
        label:"commandes-achévée",
        path:"/main/commandes-achévée",
        component: commandeAchévée,
       
    },
    {   
        icon: <ShoppingCartOutlined style= {{fontSize:20}}/>, 
        label:"commandes-inachévée",
        path:"/main/commandes-inachévée",
        component: commandeInachévée,
       
    },
    
    {   
        icon: <ShoppingOutlined  style= {{fontSize:20}}/>,
        label:"article",
        path:"/main/article",
        component: Article,
       
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
        label:"country",
        path:"/main/country",
        component: Country,
       
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
        label:"rating",
        path:"/main/rating",
        component: Rating,
       
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
        label:"vendor",
        path:"/main/vendor",
        component: Vendor
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