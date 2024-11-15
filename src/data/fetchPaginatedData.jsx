import data from "./data";

const fetchPaginatedData = async (page, pageSize, category = "") => {
  const filteredData = category
    ? data.filter((item) => item.category === category)
    : data;

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return {
    content: filteredData.slice(startIndex, endIndex),
    totalPages,
  };
};

export default fetchPaginatedData;
