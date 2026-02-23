// In a file named something like custom-types.d.ts in your project root or types folder
import * as CSS from 'csstype';

declare module 'csstype' {
  interface Properties<TLength, TString> {
    /**
     * The CSS -webkit-app-region property controls the draggable region of a frameless window in Electron.
     *
     * @see https://electronjs.org
     */
    WebkitAppRegion?: TString;
    // You can add other vendor-specific properties here if needed, e.g.:
    // WebkitUserDrag?: TString;
  }
}
