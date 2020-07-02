module.exports = {
  ci: {
      collect:{
          url:['http://localhost:8082/'],
          startServerCommand: 'npm serve-prod'
      },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};