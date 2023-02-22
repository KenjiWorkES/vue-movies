import { ref, watch } from 'vue';

const useSearch = (initialArray) => {
  const filteredMotions = ref([]);

  watch(initialArray, () => {
    filteredMotions.value = initialArray.value;
  });

  const searchHandler = (value) => {
    if (value.trim().length > 0) {
      const motions = initialArray.value.filter((motion) =>
        motion.title.toLowerCase().includes(value.toLowerCase())
      );
      filteredMotions.value = [...motions];
    } else {
      filteredMotions.value = initialArray.value;
    }
  };

  return { filteredMotions: filteredMotions, searchHandler: searchHandler };
};

export default useSearch;
