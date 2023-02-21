import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      motionPictures: [
        {
          id: 1,
          title: 'Beyond Earth',
          thumbnail: {
            trending: '/assets/thumbnails/beyond-earth/trending/large.jpg',
            regular: '/assets/thumbnails/beyond-earth/regular/large.jpg',
          },
          year: 2019,
          category: 'Movie',
          rating: 'PG',
          isBookmarked: false,
          isTrending: true,
        },
        {
          id: 2,
          title: 'Bottom Gear',
          thumbnail: {
            trending: '/assets/thumbnails/bottom-gear/trending/large.jpg',
            regular: '/assets/thumbnails/bottom-gear/regular/large.jpg',
          },
          year: 2021,
          category: 'Movie',
          rating: 'PG',
          isBookmarked: false,
          isTrending: true,
        },
        {
          id: 3,
          title: 'Undiscovered Cities',
          thumbnail: {
            trending:
              '/assets/thumbnails/undiscovered-cities/trending/large.jpg',
            regular: '/assets/thumbnails/undiscovered-cities/regular/large.jpg',
          },
          year: 2019,
          category: 'TV Series',
          rating: 'E',
          isBookmarked: false,
          isTrending: true,
        },
      ],
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};
