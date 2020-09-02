import Layout from '@/layout'

const componentsRouter = {
  path: '/samplePage',
  component: Layout,
  alwaysShow: true,
  redirect: 'noRedirect',
  name: 'SampleComponentDemo',
  meta: {
    title: 'Sample Page',
    icon: 'component'
  },
  children: [
    {
      path: 'sample1',
      component: () => import('@/views/sample/samplePage1'),
      name: 'SamplePage1',
      meta: {
        title: 'Sample Page 1',
        roles: ['admin']
      }
    },
    {
      path: 'sample2',
      component: () => import('@/views/sample/samplePage2'),
      name: 'SamplePage2',
      meta: {
        title: 'Sample Page 2',
        roles: ['admin']
      }
    },
    {
      path: 'sample3',
      component: () => import('@/views/sample/samplePage3'),
      name: 'SamplePage3',
      meta: {
        title: 'Sample Page 3',
        roles: ['admin'],
        blank: true
      }
    },
    {
      path: 'sample4',
      component: () => import('@/views/sample/samplePage3'),
      name: 'SamplePage4',
      meta: {
        title: 'Sample Page 4',
        roles: ['admin'],
        blank: true
      }
    }
  ]
}

export default componentsRouter
