export const formatText = (obj: any, replacements: Record<string, string>) => {
  if (typeof obj === 'string') {
    let replacedString = obj;
    Object.keys(replacements).forEach((key) => {
      const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
      replacedString = replacedString.replace(regex, replacements[key]);
    });
    return replacedString;
  } else if (typeof obj === 'object' && obj !== null) {
    const newObj = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
      newObj[key] = formatText(obj[key], replacements);
    }
    return newObj;
  } else {
    return obj;
  }
};
