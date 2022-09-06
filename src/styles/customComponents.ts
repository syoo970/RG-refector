export const customComponents = {
  typography: {
    error: {
      color: "red",
    },
  },
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
    typography: {
      fontFamily: [
        "SUIT-Medium",
        "Pretendard-Regular",
        "Roboto",
        "sans-serif",
      ].join(","),
    },
  },
};
