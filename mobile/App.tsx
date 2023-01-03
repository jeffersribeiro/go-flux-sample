import * as eva from "@eva-design/eva";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ApplicationProvider } from "@ui-kitten/components";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import { BagContextProvider } from "./contexts/BagContext";
import { SnackBarProvider } from "./contexts/SnackContext";
import { AuthContextProvider } from "./contexts/AuthContext";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthContextProvider>
          <SnackBarProvider>
            <BagContextProvider>
              <ApplicationProvider {...eva} theme={eva.light}>
                <Navigation />
                <StatusBar style="dark" />
              </ApplicationProvider>
            </BagContextProvider>
          </SnackBarProvider>
        </AuthContextProvider>
      </SafeAreaProvider>
    );
  }
}
