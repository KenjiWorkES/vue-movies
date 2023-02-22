import { ref, watch } from 'vue';

const useSearch = (initialArray, sectionTitle) => {
  const filteredMotions = ref(initialArray.value);
  const alreadySearch = ref(false);
  const title = sectionTitle.value;

  watch(initialArray, () => {
    filteredMotions.value = initialArray.value;
  });

  const searchHandler = (value) => {
    if (value.trim().length > 0) {
      const motions = initialArray.value.filter((motion) =>
        motion.title.toLowerCase().includes(value.toLowerCase())
      );
      filteredMotions.value = [...motions];
      sectionTitle.value = `Found ${filteredMotions.value.length} results for '${value}'`;
      alreadySearch.value = true;
    } else {
      filteredMotions.value = initialArray.value;
      sectionTitle.value = title;
      alreadySearch.value = false;
    }
  };

  return {
    filteredMotions: filteredMotions,
    searchHandler: searchHandler,
    alreadySearch: alreadySearch,
  };
};

export default useSearch;
