import checker from 'vite-plugin-checker';
export default {
  test: {
    global: true,
  },
  plugins: [
    checker({
      typescript: true,
    }),
  ],
};
