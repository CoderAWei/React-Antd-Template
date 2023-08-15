declare global {
    interface Window {
      env: any
    }
  }

  // change with your own variables
  type EnvType = {
    REACT_APP_BASE_URL: string,
    REACT_APP_TEST: string,
  }
export const env: EnvType = { ...process.env, ...window.env }
