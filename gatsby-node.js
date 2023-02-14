const path = require('path');

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
  const entrepreneurTemplate = path.resolve(`src/templates/entrepreneur.js`);
  	const expertTemplate = path.resolve('./src/templates/expert.js');
  	const coachTemplate = path.resolve('./src/templates/coach.js');

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

		// Create entrepreneurs pages
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
//  page expert
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

		// Create experts pages
		result.data.allContentfulExperts.edges.forEach(({ node }) => {
			createPage({
        path: `experts/${node.slug}`,
				component: expertTemplate,
        context: {slug: node.slug},
			});
		});
	});

  //  page expert
	const coach = graphql(`
  query {
      allContentfulCoachs {
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

  // Create experts pages
  result.data.allContentfulCoachs.edges.forEach(({ node }) => {
    createPage({
      path: `coachs/${node.slug}`,
      component: coachTemplate,
      context: {slug: node.slug},
    });
  });
});



	// Return a Promise which would wait for both the queries to resolve
	return Promise.all([entrepreneur, expert, coach]);
};