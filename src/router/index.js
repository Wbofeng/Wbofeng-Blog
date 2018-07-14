/*
 * MIT License
 *
 * Copyright (c) 2017 SmartestEE Co., Ltd..
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * Revision History:
 *     Initial: 2018/3/10     Wbofeng
 */
import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/main'
import Home from '@/pages/home'
import Works from '@/pages/works'
import Tags from '@/pages/tags'
import Blog from '@/pages/blog'
import Indexpage from '@/pages/index'
import Blogs from '@/pages/blogs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Indexpage
    },
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/', redirect: '/home'
        },
        {
          path: '/works/',
          name: 'works',
          component: Works
        },
        {
          path: '/tags',
          name: 'tags',
          component: Tags
        },
        {
          path: '/blog/:id',
          name: 'blog',
          component: Blog
        },
        {
          path: '/blogs',
          name: 'blogs',
          component: Blogs
        }
      ]
    }
  ]
})
