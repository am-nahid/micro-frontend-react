import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import {ModuleFederationPlugin} from '@module-federation/enhanced/rspack'

export default defineConfig({
  server:{
    port:2000,
  },
  tools:{
    rspack: (config, {appendPlugins})=>{
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'fedration_consumer',
          remotes:{
            federation_provider: 'federation_provider@http://localhost:3000/mf-manifest.json',
            federation_provider_2: 'federation_provider_2@http://localhost:3001/mf-manifest.json',
          },
          shared: ['react', 'react-dom']
        })
      ]);
    }
  },
  plugins: [pluginReact()],
});
