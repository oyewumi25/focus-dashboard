import {UserSwitchOutlined,UserOutlined,UsergroupDeleteOutlined,ShoppingCartOutlined,AuditOutlined,
    StarOutlined,ShoppingOutlined,RadarChartOutlined} from "@ant-design/icons"

import sousCategorie1 from "../tabs/categories/subcategory"
import SousCategorie2 from "../tabs/categories/sub-sub-category"
import Categorie from "../tabs/categories/category"


import utilisateurActif from "../tabs/users/userActif"
import utilisateurInactif from "../tabs/users/userInactif"

import commandeAceptée from "../tabs/commandes/commandeAceptée"
import commandeDispatchée from "../tabs/commandes/commandeDispatchée"

import livreurActif from "../tabs/deliverman/delivermanActif"
import livreurInactif from "../tabs/deliverman/delivermanInactif"

import paysActif from "../tabs/country/countryActif"
import paysInactif from "../tabs/country/countryInactif"

import vendeurActif from "../tabs/vendors/vendorActif"
import vendeurInactif from "../tabs/vendors/vendorInactif"

import articleActif from "../tabs/articles/articleActif"
import articleInactif from "../tabs/articles/articleInactif"



import Rating from "../tabs/rating"

import adminActif from "../tabs/admins/adminActif"
import adminInactif from "../tabs/admins/adminInactif"

import commandeALivrer from "../tabs/commandes/commande-pret-à-livrer"
import commandeEnAttente from "../tabs/commandes/commande-en-attente"
import commandePretALivrer from "../tabs/commandes/commande-pret-à-livrer"
import commandeAnnulées from "../tabs/commandes/commandeAnnulées"

import Panier from "../tabs/panier"

import categorieActive from "../tabs/categories/categorieActive"
import categorieInactive from "../tabs/categories/categorieInactive "
import souscategorieActive from "../tabs/categories/sub-category-active"
import souscategorieInactive from "../tabs/categories/sub-category-inactive "
import soussouscategorieActive from "../tabs/categories/sub-sub-categorie-active"
import soussouscategorieInactive from "../tabs/categories/sub-sub-categorie-inactive"

import Permission from "../tabs/permission"

import role from "../tabs/role"

const listMenu = [

    
    {
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"utilisateur-Actif",
        path:"/main/utilisateur-Actif",
        component: utilisateurActif,
       
    },

    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"panier",
        path:"/main/panier",
        component: Panier,
       
    },

    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"utilisateur-inactif",
        path:"/main/utilisateur-inactif",
        component: utilisateurInactif,
       
    },

    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"permission",
        path:"/main/permission",
        component: Permission,  
    },

    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"role",
        path:"/main/role",
        component: role,  
    },

    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"sous-categorie1",
        path:"/main/sous-categorie1",
        component:sousCategorie1
       
    },
    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"sous-categorie-active",
        path:"/main/sous-categorie-active",
        component:souscategorieActive
       
    },

    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"sous-sous-categorie-active",
        path:"/main/sous-sous-categorie-active",
        component:soussouscategorieActive
       
    },

    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"sous-sous-categorie-inactive",
        path:"/main/sous-sous-categorie-inactive",
        component:soussouscategorieInactive
       
    },
    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"sous-categorie-inactive",
        path:"/main/sous-categorie-inactive",
        component:souscategorieInactive
       
    },

    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"categorie",
        path:"/main/categorie",
        component:Categorie
       
    },

    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"categorie-active",
        path:"/main/categorie-active",
        component:categorieActive
       
    },

    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"categorie-inactive",
        path:"/main/categorie-inactive",
        component:categorieInactive
       
    },

    {   
        icon: <UserOutlined  style= {{fontSize:20}}/>,
        label:"sous-categorie2",
        path:"/main/sous-categorie2",
        component: SousCategorie2
       
    },
    
    {   
        icon: <UserSwitchOutlined style= {{fontSize:20}}/>,
        label:"admin-Actif",
        path:"/main/admin-Actif",
        component: adminActif,
       
    },

    {   
        icon: <UserSwitchOutlined style= {{fontSize:20}}/>,
        label:"admin-Inactif",
        path:"/main/admin-Inactif",
        component: adminInactif,
       
    },

    {   
        icon: <AuditOutlined style= {{fontSize:20}}/>, 
        label:"livreur-actif",
        path:"/main/livreur-actif",
        component: livreurActif,
       
    },
    {   
        icon: <AuditOutlined style= {{fontSize:20}}/>, 
        label:"livreur-inactif",
        path:"/main/livreur-inactif",
        component: livreurInactif,
       
    },
    
    {   
        icon: <ShoppingCartOutlined style= {{fontSize:20}}/>, 
        label:"commandes-aceptée",
        path:"/main/commandes-aceptée",
        component: commandeAceptée,  
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
        label:"commandes-dispatchée",
        path:"/main/commandes-dispatchée",
        component: commandeDispatchée,
       
    },
    
    {   
        icon: <ShoppingCartOutlined style= {{fontSize:20}}/>, 
        label:"commandes-annulées",
        path:"/main/commandes-annulées",
        component: commandeAnnulées,
       
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
        label:"rating",
        path:"/main/rating",
        component: Rating,
       
    },
    
    {
        icon: <RadarChartOutlined  style= {{fontSize:20}} />,
        label:"vendeur-Actif",
        path:"/main/vendeur-Actif",
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