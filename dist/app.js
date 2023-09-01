/* eslint-disable new-cap */
import onChange from 'on-change';

(function (onChange) {
  'use strict'

  class AbstractView {
    constructor () {
      this.app = document.getElementById('root')
    }

    setTitle (title) {
      document.title = title
    }

    render () {

    }

    destroy () {

    }
  }

  class MainView extends AbstractView {
    state = {
      list: [],
      loading: false,
      searchQuery: undefined,
      offset: 0
    }

    constructor (appState) {
      super()
      this.appState = appState
      this.appState = onChange(this.appState, this.appStateHook.bind(this))
      this.setTitle('Поиск книг')
    }

    appStateHook (path) {
      if (path === 'favorites') {
        this.render()
      }
    }

    render () {
      const main = document.createElement('div')
      main.innerHtml = `Число книг: ${this.appState.favorites.length}`
      this.app.innerHTML = ''
      this.app.append(main)
      this.appState.favorites.push('d')
    }
  }

  class App {
    routes = [
      { path: '', view: MainView }
    ]

    appState = {
      favorites: []
    }

    constructor () {
      window.addEventListener('hashchange', this.route.bind(this))
      this.route()
    }

    route () {
      if (this.currentView) {
        this.currentView.destroy()
      }
      const view = this.routes.find(r => r.path == location.hash).view
      this.currentView = new view(this.appState)
      this.currentView.render()
    }
  }

  new App()
})(onChange)
