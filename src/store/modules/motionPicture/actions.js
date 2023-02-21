import { getMotions } from '../../../helpers/posts';
import { getSingleMedia } from '../../../helpers/media';

export default {
  async fetchAllMotionPictures(context) {
    const motions = await getMotions();
    console.log(motions);

    const motionsArray = [];

    for (const motion of motions) {
      const regularImage = await getSingleMedia(motion.acf.regular);

      let trendingImage = null;

      if (motion.acf.trending) {
        trendingImage = await getSingleMedia(motion.acf.trending);
      }

      const motionAux = {
        id: motion.id,
        title: motion.title.rendered,
        thumbnail: {
          trending: trendingImage ? trendingImage.source_url : trendingImage,
          regular: regularImage.source_url,
        },
        year: motion.acf.year,
        category: motion.acf.category,
        rating: motion.acf.rating,
        isBookmarked: false,
        isTrending: motion.acf.istrending,
      };

      motionsArray.push(motionAux);
    }

    context.commit('setMotions', motionsArray);
  },
};
