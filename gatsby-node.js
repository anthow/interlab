const path = require('path');

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
  const entrepreneurTemplate = path.resolve(`src/templates/entrepreneur.js`);
  	const expertTemplate = path.resolve('./src/templates/expert.js');

	// page entrepreneur
	const entrepreneur = graphql(`
    query {
        allContentfulEntrepreneurs {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
  
  `).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create product pages
		result.data.allContentfulEntrepreneurs.edges.forEach(({ node }) => {
			createPage({
        path: `entrepreneurs/${node.slug}`,				
        component: entrepreneurTemplate,         
        context: {
          slug: node.slug,
        },
			});
		});
	});

	const expert = graphql(`
    query {
        allContentfulExperts {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    
      
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create atelier pages
		result.data.allContentfulExperts.edges.forEach(({ node }) => {
			createPage({
        path: `experts/${node.slug}`,
				component: expertTemplate,
        context: {slug: node.slug},
			});
		});
	});




	// Return a Promise which would wait for both the queries to resolve
	return Promise.all([entrepreneur, expert]);
};