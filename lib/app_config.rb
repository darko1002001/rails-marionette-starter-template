config    = YAML.load_file('config/configuration.yml')
appConfig = config[Rails.env]

if config[ENV['USER']]
  appConfig.merge!(config[ENV['USER']])
end

if Rails.env.development?
  appConfig.each do |config_item|
    config_key = config_item[0]
    config_value = config_item[1]

    if config_value.is_a?(Hash)
      parent_key = config_key + "_"
      hash = config_value
      hash.each do |key, value|
        if ENV[parent_key + key]
          hash[key] = ENV[parent_key + key]
        end
      end
      appConfig[config_key] = hash
    else
      if ENV[config_key]
        appConfig[config_key] = ENV[config_key]
      end
    end
  end
end

AppConfig = appConfig
