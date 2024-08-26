const renderEquation = (equation, element, conf) => {
  typeof window !== 'undefined' &&
    window.katex &&
    element &&
    window.katex.render(equation, element, { ...conf, throwOnError: true });
};

export { renderEquation };
