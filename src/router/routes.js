import mainRoute from './src/mainRoute'
import skillRoute from './src/skillRoute'
import workRoute from './src/workRoute'
import projectRoute from './src/projectRoute'
import educationRoute from './src/educationRoute'
import errorRoute from './src/errorRoute'
import defaultRoute from './src/defaultRoute'

let routes = []

routes.push(mainRoute)
routes.push(skillRoute)
routes.push(workRoute)
routes.push(projectRoute)
routes.push(educationRoute)
errorRoute.forEach(route => {
  routes.push(route)
})
routes.push(defaultRoute)

export default routes