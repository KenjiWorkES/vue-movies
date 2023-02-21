import { getMotions } from '../../../helpers/posts';
import { getSingleMedia } from '../../../helpers/media';

export default {
  async fetchAllMotionPictures(context) {
    const motions = await getMotions();
    console.log(motions);

    const motionsArray = [];

    motions.forEach(async (motion) => {
      const regularImage = await getSingleMedia(motion.acf.regular);

      let trendingImage = null;

      if (motion.acf.trending) {
        trendingImage = await getSingleMedia(motion.acf.trending);
      }

      const motionAux = {
        id: motion.id,
        thumbnail: {
          trending: trendingImage ? trendingImage.link : trendingImage,
          regular: regularImage.link,
        },
        year: motion.acf.year,
        category: motion.acf.category,
        rating: motion.acf.rating,
        isBookmarked: false,
        isTrending: motion.acf.isTrending,
      };

      motionsArray.push(motionAux);
    });

    context.commit('setMotions', motions);
  },
};
