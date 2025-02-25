interface Chart {
  chartName: string
  repoType: string
  repoName: string
  versions: Version[]
}

interface Version {
  appVersion: string
  version: string
}

export default <Chart>{
  chartName: 'kubewarden-controller',
  repoType:  'cluster',
  repoName:  'kubewarden-charts',
  versions:  [
    {
      appVersion: 'v1.10.0-rc1',
      version:    '2.0.6-rc1'
    },
    {
      appVersion: 'v1.9.0',
      version:    '2.0.5'
    },
    {
      appVersion: 'v1.9.0',
      version:    '2.0.4'
    },
    {
      appVersion: 'v1.9.0',
      version:    '2.0.3'
    },
    {
      appVersion: 'v1.9.0-rc3',
      version:    '2.0.3-rc3'
    },
    {
      appVersion: 'v1.9.0-rc2',
      version:    '2.0.3-rc2'
    },
    {
      appVersion: 'v1.9.0-rc1',
      version:    '2.0.3-rc1'
    },
    {
      appVersion: 'v1.9.0',
      version:    '2.0.3'
    },
    {
      appVersion: 'v1.8.0',
      version:    '2.0.2'
    },
    {
      appVersion: 'v1.8.0',
      version:    '2.0.1'
    },
    {
      appVersion: 'v1.8.0',
      version:    '2.0.0'
    },
    {
      appVersion: 'v1.8.0-rc2',
      version:    '2.0.0-rc1'
    },
    {
      appVersion: 'v1.8.0-rc2',
      version:    '2.0.0-rc1'
    },
    {
      appVersion: 'v1.7.0',
      version:    '1.6.2'
    },
    {
      appVersion: 'v1.7.0',
      version:    '1.6.1'
    },
    {
      appVersion: 'v1.7.0',
      version:    '1.6.0'
    },
    {
      appVersion: 'v1.7.0-rc3',
      version:    '1.6.0-rc4'
    },
    {
      appVersion: 'v1.7.0-rc3',
      version:    '1.6.0-rc3'
    },
    {
      appVersion: 'v1.7.0-rc2',
      version:    '1.6.0-rc2'
    },
    {
      appVersion: 'v1.7.0-rc1',
      version:    '1.6.0-rc1'
    },
    {
      appVersion: 'v1.6.0',
      version:    '1.5.3'
    },
    {
      appVersion: 'v1.6.0',
      version:    '1.5.2'
    },
    {
      appVersion: 'v1.6.0',
      version:    '1.5.1'
    },
    {
      appVersion: 'v1.6.0',
      version:    '1.5.0'
    },
    {
      appVersion: 'v1.6.0-rc6',
      version:    '1.5.0-rc6'
    },
    {
      appVersion: 'v1.6.0-rc5',
      version:    '1.5.0-rc5'
    },
    {
      appVersion: '1.5.0',
      version:    '1.4.1'
    },
    {
      appVersion: '1.5.0',
      version:    '1.4.0'
    },
    {
      appVersion: 'v1.4.0',
      version:    '1.3.1'
    },
    {
      appVersion: 'v1.4.0',
      version:    '1.3.0'
    },
    {
      appVersion: 'v1.4.0',
      version:    '1.2.8'
    },
    {
      appVersion: 'v1.4.0-rc2',
      version:    '1.2.8-rc2'
    },
    {
      appVersion: 'v1.4.0-rc1',
      version:    '1.2.8-rc1'
    },
    {
      appVersion: 'v1.3.0',
      version:    '1.2.7'
    },
    {
      appVersion: 'v1.3.0',
      version:    '1.2.6'
    },
    {
      appVersion: 'v1.3.0',
      version:    '1.2.4'
    },
    {
      appVersion: 'v1.1.1',
      version:    '1.2.3'
    },
    {
      appVersion: 'v1.1.1',
      version:    '1.2.2'
    },
    {
      appVersion: 'v1.1.1',
      version:    '1.2.1'
    },
    {
      appVersion: 'v1.1.0',
      version:    '1.2.0'
    },
    {
      appVersion: 'v1.1.0',
      version:    '1.1.1'
    },
    {
      appVersion: 'v1.0.0',
      version:    '1.0.0'
    },
    {
      appVersion: 'v1.0.0-rc4',
      version:    '1.0.0-rc4'
    },
    {
      appVersion: 'v1.0.0-rc3',
      version:    '1.0.0-rc3'
    },
    {
      appVersion: 'v1.0.0-rc2',
      version:    '1.0.0-rc2'
    },
    {
      appVersion: 'v1.0.0-rc1',
      version:    '1.0.0-rc1'
    },
    {
      appVersion: 'v0.5.5',
      version:    '0.4.6'
    },
    {
      appVersion: 'v0.5.4',
      version:    '0.4.5'
    },
  ],
};
