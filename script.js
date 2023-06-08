// Get the language switch button element
var langSwitchBtn = document.getElementById('langSwitch');

// Add event listener for click event
langSwitchBtn.addEventListener('click', function() {
    // Get the current language
    var currentLang = langSwitchBtn.textContent.trim();

    // Toggle between English and Spanish
    if (currentLang === 'Español') {
        langSwitchBtn.textContent = 'English';
        // Change the language to Spanish, update content as needed
        // For example, you can update the text on the page to Spanish
        document.getElementById('header1').textContent = 'Inicio';
        document.getElementById('header2').textContent = 'Productos';
        document.getElementById('header3').textContent = 'Sobre Nosotros';
        document.getElementById('SHOPNOW').textContent = 'Entra a nuestra página web';
        document.getElementById('home').querySelector('h1').textContent = 'Descubre nuestra tienda de zapatería online ';
        document.getElementById('home').querySelector('p').textContent = 'Siente la conexión al pisar con Yubinko';
        document.getElementById('descripcion').querySelector('p').textContent = 'FiveToe Flex son las nuevas zapatillas para senderismo que tienen un diseño único e innovador con cinco compartimentos individuales para los dedos, lo que permite una mayor libertad de movimiento y flexibilidad.El zapato se moldea al pie del cliente, en el cual el producto está pensado para la adaptación con el pie del consumidor, y con la finalidad de simular el caminar descalzo.\n';
        document.getElementById('about').querySelector('h2').textContent = 'Sobre nosotros';
        document.getElementById('about').querySelector('p').textContent = <br/>+'Somos seis estudiantes de AF Centre de Estudios, cada uno especializado en diferentes áreas de negocios y administración. Dos de nosotros estamos especializados en Comercio Internacional, tres en Marketing y Publicidad y uno en Administración y Finanzas.<br> Después de investigar el mercado, descubrimos que hay una creciente demanda de zapatillas de 5 dedos, ya que son conocidas por mejorar la postura y reducir el impacto en las articulaciones. Sin embargo, nos dimos cuenta de que la mayoría de estas zapatillas están fabricadas con materiales sintéticos que no son amigables con el medio ambiente. Decidimos abordar este problema creando una empresa sostenible, utilizaremos materiales orgánicos y reciclados en la producción de nuestras zapatillas, y nos aseguraremos de que los procesos de fabricación sean lo más ecológicos posibles. Por lo tanto, hemos combinado nuestras habilidades y conocimientos para crear una empresa sostenible de zapatillas de 5 dedos. Estamos comprometidos con el medio ambiente y esperamos tener un impacto positivo en el mercado y en la comunidad en general. ';
        // Update other content as needed
    } else if (currentLang === 'English') {
        langSwitchBtn.textContent = 'Español';
        // Change the language to English, update content as needed
        // For example, you can update the text on the page to English
        document.getElementById('header1').textContent = 'Home';
        document.getElementById('header2').textContent = 'Products';
        document.getElementById('header3').textContent = 'About Us';
        document.getElementById('SHOPNOW').textContent = 'Enter our website';
        document.getElementById('home').querySelector('h1').textContent = 'Discover our online shoe store';
            document.getElementById('home').querySelector('p').textContent = 'Feel the connection when stepping with Yubinko';
        document.getElementById('descripcion').querySelector('p').textContent = 'FiveToe Flex is the new hiking shoe that has a unique and innovative design with five individual toe compartments, allowing for greater freedom of movement and flexibility. The shoe is molded to the customers foot, in which the product is designed to fit the consumers foot, and to simulate barefoot walking.\n';
        document.getElementById('about').querySelector('h2').textContent = 'About Us';
        document.getElementById('about').querySelector('p').textContent = 'We are six students from AF Centre dEstudis, each specialized in different areas of business and administration. Two of us are specialized in International Trade, three in Marketing and Advertising and one in Administration and Finance.<br> After researching the market, we discovered that there is a growing demand for 5-toe shoes, as they are known to improve posture and reduce impact on the joints. However, we realized that most of these shoes are made of synthetic materials that are not environmentally friendly, we decided to address this problem by creating a sustainable company. We will use organic and recycled materials in the production of our sneakers, and we will make sure that the manufacturing processes are as environmentally friendly as possible. In short, we have combined our skills and knowledge to create a sustainable 5-finger sneaker company. We are committed to the environment and hope to have a positive impact on the market and the community at large.';
        // Update other content as needed
    }
});