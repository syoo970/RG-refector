export const customComponents = {
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          p: {
            marginLeft: 0,
          },
        },
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        root: {
          flexDirection: "row",
        },
        avatar: {
          border: "2px solid #4AD395",
          ":last-child": {
            marginLeft: "-8px !important",
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        circular: {
          border: "2px solid #4AD395",
        },
      },
    },
  },
};
