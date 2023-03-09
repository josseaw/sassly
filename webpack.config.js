// Import only necessary packages
const webpack = require('webpack');
const path = require('path');
const glob = require('glob');

// Import plugins here
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const WebpackMessages = require('webpack-messages');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const rootPath = path.resolve(__dirname);
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist/assets');
const isProduction = process.env.NODE_ENV === 'production' ? true : false;
const { name: appName } = require('./package.json');

const getEntryFiles = () => {
  /** Our main entries */
  const entries = {
    'css/styles.bundle': path.resolve(srcPath, 'scss/styles.scss'),
    'js/scripts.bundle': path.resolve(srcPath, 'js/scripts.js'),
  };

  /** Export page styles separately inside `scss/pages` directory */
  (glob.sync(srcPath + '/scss/pages/**/!(_)*.scss') || []).forEach(file => {
    entries[file.replace(/.*scss\/(.*?)\.scss$/ig, 'css/$1')] = file.replace(/.*scss\/(.*?)$/ig, './src/scss/$1');
  });

  /** Export all javascript files, including files in each folder */
  (glob.sync(path.resolve('./', srcPath) + '/js/**/!(_)*.js') || []).forEach(file => {
    entries[file.replace(/.*js\/(.*?)\.js$/ig, 'js/$1')] = file.replace(/.*js\/(.*?)$/ig, './src/js/$1');
  });

  return entries;
}

module.exports = {
  /** Enable optimizations for production build */
  mode: isProduction ? 'production' : 'development',
  /** Get all entry files */
  entry: getEntryFiles(),
  /** Our main output path */
  output: {
    path: distPath,
    filename: isProduction ? '[name].min.js' : '[name].js',
    assetModuleFilename: 'media/bundle/[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          /** We're using MiniCssExtractPlugin (first item of this array) to extract CSS into separate files
           * But you can use second method by injecting a `<style>` tag without load the css in `<link>` tag with style-loader (second item of this array)
           * And styling will by applied by JavaScript and you must import your style in JavaScript file
           * If you want to use the second method, you should remove the first item of this array and uncomment the second item
           */
          MiniCssExtractPlugin.loader,
          // {
          //   /** Adds CSS to the DOM by injecting a `<style>` tag */
          //   loader: 'style-loader'
          // },
          {
            /** Interprets `@import` and `url()` like `import/require()` and will resolve them */
            loader: 'css-loader',
            options: {
              /** Set false to prevent following urls to fonts and images */
              url: false
            }
          },
          {
            /** Loader for webpack to process CSS with PostCSS */
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      // Options
                    },
                  ],
                ]
              }
            }
          },
          {
            /** This webpack loader allows you to have a distributed set SCSS files and assets co-located with those SCSS files */
            loader: 'resolve-url-loader',
          },
          {
            /** Loads a SASS/SCSS file and compiles it to CSS */
            loader: 'sass-loader',
            options: {
              /** Important to enable sourceMap due to follow instruction from `resolve-url-loader` */
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      /** Import jQuery */
      jquery: path.resolve(__dirname, 'node_modules/jquery/src/jquery'),
    },
    extensions: ['.js', '.scss'],
  },
  optimization: {
    /** Enable minimizer for production build only */
    minimize: isProduction,
    minimizer: [
      /** Use terser to minify/minimize JavaScript */
      new TerserJSPlugin({}),
      /** Use CssMinizerPlugin to optimize and minify CSS */
      new CssMinimizerPlugin(),
    ],
  },
  /** Define our plugins */
  plugins: [
    /** Use FixStyleOnlyEntriesPlugin plugin to remove bundled js files from css files
     * Disabled for development mode because of an error
     * If you know about the reason of error, you can call me and help me to improve the script
     */
    isProduction && new FixStyleOnlyEntriesPlugin(),
    /** Use MiniCssExtractPlugin to extract CSS into separate files */
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].min.css' : '[name].css',
    }),
    /** Use the ProvidePlugin to inject implicit globals */
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    /** Beautifully format webpack messages */
    new WebpackMessages({
      name: appName,
      logger: str => console.log(`>> ${str}`)
    }),
    /** Use CopyWebpackPlugin to copy necessary files from sources directory */
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(srcPath, 'media'),
          to: path.resolve(distPath, 'media'),
          noErrorOnMissing: true
        },
        {
          from: path.resolve(srcPath, 'plugins'),
          to: path.resolve(distPath, 'plugins'),
          noErrorOnMissing: true
        }
      ]
    })
  ].filter(plugin => plugin),
  /** Run the dev server on `dist` directory, so you don't need external dev server or live server */
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    hot: true
  },
  /** Caching the build files generated to improve the build speed in development */
  cache: !isProduction,
  /** Source mapping to enhance the debugging process */
  devtool: !isProduction && 'source-map',
  performance: {
    /** Disable warnings hint */
    hints: false,
  },
  /** What bundle information gets displayed */
  stats: 'errors-only',
}