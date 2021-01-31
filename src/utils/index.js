const getRelativePath = (page, id) => {
  return `/${page}/${id}`;
};

const imageUrl = (res) => {
  if (Object.keys(res).length === 0 && res.constructor === Object) {
    // Empty object
    return "";
  }
  const path = res.thumbnail.path;
  const extension = res.thumbnail.extension;
  const imgQuality = "portrait_incredible";
  if (path === "" || extension === "") {
    return "";
  }
  const imgVariant = `${imgQuality}.${extension}`;
  return `${path}/${imgVariant}`;
};

export default {
  getRelativePath,
  imageUrl,
};
