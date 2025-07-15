import OW from "@/assets/images/projects/project-orb-weber.png";
import GMT from "@/assets/images/projects/gmtime.jpg";
import MF from "@/assets/images/projects/mode_feerie.jpg";
import MF_WP from "@/assets/images/projects/mf_wp_scaled.jpg";

export const nextProjectsData = [
    {
        image : OW,
        imgAlt : "Project Orb Weber",
        head : "Orb Weber Next Typescript",
        desc : "Créé pour présenter mes services de développeur freelance, ce site permet aux clients de découvrir mon travail et de me contacter facilement. J’ai migré le projet initialement fait en React vers Next.js avec TypeScript, afin d’améliorer les performances, le SEO et la structure du code.",
        link : "https://github.com/OwaisT/orbweber_next_typescript",
        btnTxt : "Vers le dépôt Git"
    }
]

export const reactProjectsData = [
    {
        image : OW,
        imgAlt : "Project Orb Weber",
        head : "Orb Weber ReactJS",
        desc : "Première version de mon site personnel pour présenter mes services de développeur freelance. Ce projet m’a permis de mettre en pratique mes compétences en React tout en travaillant l’ergonomie, l’expérience utilisateur et la performance. Il a ensuite été migré vers Next.js avec TypeScript pour plus d’optimisation.",
        link : "https://github.com/OwaisT/orbweber_react",
        btnTxt : "Vers le dépôt Git"
    },
    {
        image : GMT,
        imgAlt : "Greek Meantime ReactJS",
        head : "Greek Meantime ReactJS",
        desc : "Développement d’un site e-commerce pour une marque de vêtements spécialisée dans les articles en polaire, alliant qualité et prix abordable. L’entreprise fabrique ses produits au Pakistan et les vend en France. Le site avait pour but de présenter la marque, ses valeurs, et de faciliter la vente en ligne à travers une interface claire et efficace.",
        link : "https://github.com/OwaisT/gmtime",
        btnTxt : "Vers le dépôt Git"
    },
    {
        image : MF,
        imgAlt : "Mode Féérie ReactJS",
        head : "Mode Féérie ReactJS",
        desc : "Création d’un site vitrine pour Mode Féérie, une marque qui organise des défilés de mode à Paris pendant la Fashion Week. Le site met en avant les événements passés et futurs, les créateurs participants et l’univers de la marque, avec un design élégant et dynamique pour refléter l’esprit des défilés.",
        link : "https://github.com/OwaisT/modefeerie_react",
        btnTxt : "Vers le dépôt Git"
    }
]

export const pythonProjectsData = [
    {
        image : OW,
        imgAlt : "Orb Weber Flask",
        head : "Orb Weber Flask",
        desc : "Développement d’un middleware en Flask pour connecter le site à une base de données Airtable. L’objectif était de rendre le contenu du site (services, projets, etc.) facilement modifiable et évolutif, sans toucher au code front, pour un design plus flexible et scalable.",
        link : "https://github.com/OwaisT/orbweber_python_middleware",
        btnTxt : "Vers le dépôt Git"
    },
    {
        image : GMT,
        imgAlt : "Greek Meantime Flask",
        head : "Greek Meantime Flask",
        desc : "Développement d’un middleware en Flask pour gérer les sessions panier et centraliser les données du site via l’API WooCommerce, afin d’éviter la création d’un back-end e-commerce complexe. Intégration manuelle du module de paiement Stripe POS, non disponible via l’API WooCommerce, pour permettre les paiements en ligne via terminal virtuel.",
        link : "https://github.com/OwaisT/gmtime_middleware",
        btnTxt : "Vers le dépôt Git"
    },
    {
        image : MF,
        imgAlt : "Mode Féérie Flask",
        head : "Mode Féérie Flask",
        desc : "Création d’un middleware en Flask pour connecter le site à une base Airtable, permettant de gérer facilement et de manière évolutive le contenu (événements, créateurs, etc.) sans modifier directement le front-end, pour une gestion plus souple et scalable.",
        link : "https://github.com/OwaisT/modefeerie_middleware",
        btnTxt : "Vers le dépôt Git"
    }
]

export const wordpressProjectsData = [
    {
        image : OW,
        imgAlt : "Orb Weber",
        head : "Orb Weber",
        desc : "Migration du site vers WordPress avec création d’un thème personnalisé, permettant une gestion autonome et rapide du contenu. Cette solution optimise la flexibilité sans dépendre de plugins tiers coûteux.",
        link : "https://orbweber.com/",
        btnTxt : "Vers le site"
    },
    {
        image : GMT,
        imgAlt : "Greek Meantime",
        head : "Greek Meantime",
        desc : "Refonte complète du site en WordPress avec WooCommerce pour gérer efficacement la boutique en ligne, incluant la gestion du catalogue, du panier, et du système de paiement POS natif WooCommerce, garantissant simplicité et sécurité.",
        link : "https://greekmeantime.com/",
        btnTxt : "Vers le site"
    },
    {
        image : MF_WP,
        imgAlt : "Mdoe Féérie",
        head : "Mode Féérie",
        desc : "Migration vers WordPress avec un thème personnalisé pour faciliter la gestion des contenus liés aux événements de mode. L’interface WordPress permet une mise à jour fluide et rapide, adaptée aux besoins du client.",
        link : "https://modefeerie.com/",
        btnTxt : "Vers le site"
    }
]
