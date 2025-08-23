import OW from "@/assets/images/projects/project-orb-weber.png";
import OW_WP from "@/assets/images/projects/orb_weber_wp.jpg";
import GMT from "@/assets/images/projects/gmtime.jpg";
import GMT_WP from "@/assets/images/projects/gmt_wp.jpg";
import MF from "@/assets/images/projects/mode_feerie.jpg";
import MF_WP from "@/assets/images/projects/mf_wp_scaled.jpg";

export const nextProjectsData = [
    {
        image : OW,
        imgAlt : "Project Orb Weber",
        head : "Orb Weber Next Typescript",
        desc: [
            { label : "Objectif", text : "Présenter mes services de développeur freelance et offrir un moyen simple de me contacter." },
            { label : "Stack technique", text : "Next.js, TypeScript, hébergement sur Cpanel." },
            { label : "Réalisation", text : "Migration d’un site React vers Next.js avec refactorisation du code et intégration des balises SEO et données structurées directement côté serveur." },
            { label : "Résultat technique", text : "Les balises SEO et données structurées sont désormais correctement interprétées par l’ensemble des moteurs de recherche et outils d’analyse, y compris ceux ne traitant pas le JavaScript dynamique." }

        ],
        link : "https://github.com/OwaisT/orbweber_next_typescript",
        btnTxt : "Vers le dépôt Git"
    }
]

export const reactProjectsData = [
    {
        image : MF,
        imgAlt : "Mode Féérie ReactJS",
        head : "Mode Féérie ReactJS",
        desc : [
            { label: "Objectif", text: "Créer un site vitrine pour Mode Féérie afin de mettre en avant les défilés de mode, les créateurs participants et l’univers de la marque." },
            { label: "Stack technique", text: "React, WordPress, CSS, hébergement sur Cpanel." },
            { label: "Réalisation", text: "Développement d’un design élégant et dynamique pour refléter l’esprit des défilés, avec une navigation claire pour présenter les événements passés et futurs." },
            { label: "Résultat technique", text: "Le site permet à la marque de présenter ses événements et son univers de manière professionnelle et attractive, et a été migré vers WordPress pour faciliter la gestion de contenu par l’équipe." }    
        ],
        link : "https://github.com/OwaisT/modefeerie_react",
        btnTxt : "Vers le dépôt Git"
    },
        {
        image : GMT,
        imgAlt : "Greek Meantime ReactJS",
        head : "Greek Meantime ReactJS",
        desc : [
            { label: "Objectif", text: "Développer un site e-commerce pour une marque de vêtements en polaire, afin de présenter la marque, ses valeurs et faciliter la vente en ligne." },
            { label: "Stack technique", text: "React, Flask, WooCommerce, CSS, Stripe, hébergement sur Cpanel." },
            { label: "Réalisation", text: "Création d’une interface claire et efficace pour permettre aux clients de naviguer facilement, consulter les produits et effectuer des achats en ligne." },
            { label: "Résultat technique", text: "Le site a permis à l’entreprise de présenter sa marque et ses produits en ligne avec une expérience utilisateur optimisée. Il a ensuite été migré vers WordPress/WooCommerce pour simplifier la gestion du catalogue et des ventes." }
    
        ],
        link : "https://github.com/OwaisT/gmtime",
        btnTxt : "Vers le dépôt Git"
    },
    {
        image : OW,
        imgAlt : "Project Orb Weber",
        head : "Orb Weber ReactJS",
        desc : [
            { label: "Objectif", text: "Présenter mes services de développeur freelance dans une première version de mon site personnel." },
            { label: "Stack technique", text: "React, JavaScript, hébergement sur Cpanel." },
            { label: "Réalisation", text: "Création d’une interface ergonomique et performante pour mettre en valeur mes projets et permettre un contact rapide." },
            { label: "Résultat technique", text: "Ce projet m’a permis de consolider mes compétences en React tout en travaillant l’ergonomie, l’expérience utilisateur et la performance. La base a ensuite servi pour une migration vers Next.js avec TypeScript, améliorant l’optimisation et la structure du code." }

        ],
        link : "https://github.com/OwaisT/orbweber_react",
        btnTxt : "Vers le dépôt Git"
    }
]

export const pythonProjectsData = [
        {
        image : GMT,
        imgAlt : "Greek Meantime Flask",
        head : "Greek Meantime Flask",
        desc : [
            { label: "Objectif", text: "Développer un middleware en Flask pour gérer les sessions panier et centraliser les données du site via l’API WooCommerce, sans créer un backend e-commerce complet." },
            { label: "Stack technique", text: "Python, Flask, WooCommerce API, Stripe POS." },
            { label: "Réalisation", text: "Gestion des sessions panier, centralisation des données produit, et intégration manuelle du module de paiement Stripe POS pour permettre les paiements en ligne via terminal virtuel." },
            { label: "Résultat technique", text: "Le middleware a permis d’éviter un backend e-commerce complexe tout en offrant une expérience d’achat fluide et sécurisée, avec la compatibilité Stripe POS ajoutée manuellement." }
        ],
        link : "https://github.com/OwaisT/gmtime_flask_middleware",
        btnTxt : "Vers le dépôt Git"
    },
    {
        image : OW,
        imgAlt : "Orb Weber Flask",
        head : "Orb Weber Flask",
        desc : [
            { label: "Objectif", text: "Développer un middleware en Flask pour connecter le site à une base de données Airtable et permettre une gestion de contenu flexible." },
            { label: "Stack technique", text: "Python, Flask, Airtable API." },
            { label: "Réalisation", text: "Création d’un backend capable de gérer dynamiquement les services, projets et autres contenus du site sans modification du code front." },
            { label: "Résultat technique", text: "Le middleware a rendu le site facilement modifiable et évolutif, améliorant la flexibilité et la scalabilité du design et des contenus." }
        ],
        link : "https://github.com/OwaisT/orbweber_python_middleware",
        btnTxt : "Vers le dépôt Git"
    },
    {
        image : MF,
        imgAlt : "Mode Féérie Flask",
        head : "Mode Féérie Flask",
        desc : [
            { label: "Objectif", text: "Développer un middleware en Flask pour connecter le site à une base Airtable et gérer le contenu (événements, créateurs, etc.) de manière flexible." },
            { label: "Stack technique", text: "Python, Flask, Airtable API." },
            { label: "Réalisation", text: "Création d’un backend permettant de modifier et mettre à jour le contenu du site sans toucher au front-end." },
            { label: "Résultat technique", text: "Le middleware a rendu la gestion des contenus plus souple et scalable, facilitant la mise à jour des événements et des créateurs pour le site Mode Féérie." }
        ],
        link : "https://github.com/OwaisT/modefeerie_middleware",
        btnTxt : "Vers le dépôt Git"
    }
]

export const wordpressProjectsData = [
    {
        image : OW_WP,
        imgAlt : "Orb Weber",
        head : "Orb Weber",
        desc : [
            { label: "Objectif", text: "Migrer mon site personnel vers WordPress afin de gérer plus facilement mon contenu et mes projets." },
            { label: "Stack technique", text: "WordPress, PHP, HTML, CSS, création de thème personnalisé." },
            { label: "Réalisation", text: "Développement d’un thème WordPress personnalisé pour améliorer la flexibilité et la gestion autonome du contenu de mon portfolio." },
            { label: "Résultat technique", text: "Le site est désormais plus facile à maintenir et à mettre à jour, offrant une interface flexible pour présenter mes projets et compétences." }
        ],
        link : "https://orbweber.com/",
        btnTxt : "Vers le site"
    },
    {
        image : GMT_WP,
        imgAlt : "Greek Meantime",
        head : "Greek Meantime",
        desc : [
            { label: "Objectif", text: "Refondre le site e-commerce en WordPress avec WooCommerce pour gérer efficacement la boutique en ligne." },
            { label: "Stack technique", text: "WordPress, WooCommerce, PHP, HTML, CSS, création de thème personnalisé." },
            { label: "Réalisation", text: "Mise en place d’un système complet pour gérer le catalogue, le panier et les paiements via le POS natif WooCommerce, garantissant une expérience utilisateur fluide." },
            { label: "Résultat technique", text: "Le site offre désormais une gestion simple, sécurisée et autonome de la boutique en ligne, tout en conservant la flexibilité nécessaire pour évoluer." }
        ],
        link : "https://greekmeantime.com/",
        btnTxt : "Vers le site"
    },
    {
        image : MF_WP,
        imgAlt : "Mdoe Féérie",
        head : "Mode Féérie",
        desc : [
            { label: "Objectif", text: "Migrer le site Mode Féérie vers WordPress avec un thème personnalisé pour faciliter la gestion des contenus liés aux événements de mode." },
            { label: "Stack technique", text: "WordPress, PHP, HTML, CSS, création de thème personnalisé." },
            { label: "Réalisation", text: "Développement d’un thème personnalisé permettant une mise à jour fluide et rapide des événements, créateurs et autres contenus." },
            { label: "Résultat technique", text: "Le site offre désormais une gestion simple et efficace des contenus, adaptée aux besoins de la marque et de ses événements." }
        ],
        link : "https://modefeerie.com/",
        btnTxt : "Vers le site"
    }
]

export const aboutMeData = [
    { 
        heading: "Qui suis-je ?",
        description: "Je construis des solutions web là où le simple “ça fonctionne” ne suffit pas. Par exemple, j’ai conçu des middlewares qui synchronisent automatiquement des données entre Airtable et le site, permettant à mes clients de mettre à jour leur catalogue sans toucher au code front-end. J’optimise les projets pour que chaque ajout ou modification n’introduise jamais de bug et que le site reste performant même sous charge. Chaque projet que je livre est pensé pour durer et évoluer sans effort."
    },
    { 
        heading: "Coder, ce n’est pas juste écrire du code",
        description: "Respecter les bonnes pratiques — sécuriser les entrées et sorties, commenter, modulariser — n’est que la première couche. Ce qui fait la différence, c’est la compréhension de l’infrastructure et de l’impact de chaque ligne de code sur le système global. Je réfléchis à la structure des bases de données, aux flux d’API et à l’intégration entre les différentes parties du projet, pour que chaque nouvelle fonctionnalité soit facile à ajouter et performante. Mon code est pensé pour être repris et étendu par d’autres sans créer de casse ni de confusion."
    },
    { 
        heading: "Pensée produit et expérience utilisateur",
        description: "Chaque choix technique que je fais se traduit directement dans l’expérience des visiteurs. Je teste systématiquement les formulaires, les boutons et la navigation pour m’assurer que tout est clair, intuitif et fiable. Je vérifie que les flux d’achat ou de réservation se déroulent sans friction, que les contenus dynamiques se chargent correctement et rapidement, et que les interactions critiques ne génèrent pas de bugs pouvant nuire à la confiance des utilisateurs. Mon objectif est que chaque projet soit fonctionnel et agréable dès le premier jour, tout en cachant la complexité technique qui se trouve derrière."
    },
    { 
        heading: "Sécurité et conformité",
        description: "Je veille à ce que tout ce que je développe soit sécurisé et conforme aux réglementations, notamment le RGPD. Cela inclut le chiffrement des données, la collecte minimale nécessaire et la mise en place de règles claires de conservation et de suppression. Mon objectif est que chaque projet soit non seulement performant et fiable, mais également prêt à durer dans le temps, tout en protégeant les informations des utilisateurs."
    },
    { 
        heading: "L’importance des tests",
        description: "Récemment, j’ai compris que la partie la plus lourde de la création d’un projet n’est pas la conception ni l’implémentation, mais les tests. Pour qu’un projet soit réellement fiable et que les utilisateurs puissent compter dessus, il faut consacrer plus de 50 % du temps aux tests. Chaque scénario est vérifié, chaque interaction testée, même dans les cas imprévus. C’est à ce moment-là que la qualité réelle prend vie, et que le projet devient solide et digne de confiance."
    },
    { 
        heading: "Ce que j’apporte",
        description: "Je combine compétences techniques, sens pratique et esprit d’analyse pour que chaque projet fonctionne réellement, reste facile à maintenir et à faire évoluer, et apporte une vraie valeur dès le lancement."
    }
];
