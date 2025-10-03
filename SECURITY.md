# 🔒 Security Guidelines for Salam-Website

## Overview

This document outlines the security measures implemented in the Salam-Website project to ensure safe and secure development practices.

## 🛡️ Automated Security Checks

### Pre-commit Security Audits

The project now includes automated security audits that run before each commit:

#### 1. **Bun Security Audit** (Primary)
- **Command**: `bun audit`
- **Purpose**: Scans dependencies for known vulnerabilities using Bun's built-in audit functionality
- **When**: Runs automatically on every commit via pre-commit hooks
- **Scope**: Checks all dependencies in `package.json` and `bun.lock`

#### 2. **NPM Security Audit** (Fallback)
- **Command**: `npm audit --audit-level=moderate`
- **Purpose**: Provides fallback security scanning when Bun is not available
- **When**: Runs automatically if Bun is not installed on the system
- **Audit Level**: Set to moderate to catch significant vulnerabilities

### Manual Security Commands

You can also run security checks manually:

```bash
# Run Bun audit
bun audit

# Run Bun audit with automatic fixes
bun run audit:fix

# Run comprehensive security check (both Bun and NPM)
bun run security:check

# Run NPM audit directly (if needed)
npm audit

# Fix NPM audit issues automatically
npm audit fix
```

## 🔍 What Gets Checked

The security audits scan for:

- **Known Vulnerabilities**: CVE-listed security issues in dependencies
- **Outdated Packages**: Dependencies with available security updates
- **Malicious Packages**: Known problematic or compromised packages
- **License Issues**: Packages with problematic licensing
- **Dependency Chains**: Vulnerabilities in transitive dependencies

## 🚨 Handling Security Issues

### When Security Issues Are Found

1. **Automatic Blocking**: Commits will be blocked if high-severity vulnerabilities are found
2. **Review Required**: Moderate vulnerabilities require manual review
3. **Documentation**: All security decisions should be documented

### Resolution Steps

1. **Update Dependencies**:
   ```bash
   bun update
   # or
   npm update
   ```

2. **Apply Security Fixes**:
   ```bash
   bun run audit:fix
   # or
   npm audit fix
   ```

3. **Manual Review**: For complex issues, manually review and update specific packages

4. **Override if Necessary**: In rare cases, security issues may need to be accepted with proper justification

## ⚙️ Configuration

### Pre-commit Configuration

The security audits are configured in `.pre-commit-config.yaml`:

- **Audit Level**: Moderate (can be adjusted based on project needs)
- **Execution**: Runs on every commit
- **Fallback**: NPM audit runs if Bun is unavailable
- **Non-blocking**: Can be configured to warn instead of block commits

### Customization Options

You can customize the security level by modifying:

1. **Audit Level**: Change `--audit-level=moderate` to `high`, `low`, or `info`
2. **Bypass**: Add `--skip-unused` to ignore unused dependencies
3. **Production Only**: Add `--production` to check only production dependencies

## 📋 Best Practices

### For Developers

1. **Regular Audits**: Run `bun run security:check` regularly during development
2. **Update Dependencies**: Keep dependencies up to date with security patches
3. **Review Changes**: Carefully review dependency updates for breaking changes
4. **Document Exceptions**: If security warnings are accepted, document the reasoning

### For CI/CD

1. **Automated Checks**: Security audits run automatically in pre-commit hooks
2. **Build Blocking**: Failed audits can block builds and deployments
3. **Reporting**: Security scan results are available in commit logs
4. **Monitoring**: Regular monitoring of dependency health

## 🛠️ Troubleshooting

### Common Issues

1. **Bun Not Found**: 
   - Install Bun: `curl -fsSL https://bun.sh/install | bash`
   - Or use NPM fallback: The system automatically falls back to NPM audit

2. **False Positives**:
   - Review the vulnerability details
   - Check if it affects your usage
   - Consider using `--skip-unused` for unused dependencies

3. **Network Issues**:
   - Ensure internet connection for vulnerability database updates
   - Configure proxy settings if needed

### Bypassing Security Checks

**⚠️ Use with caution!**

To bypass security checks temporarily:

```bash
# Skip pre-commit hooks entirely (NOT RECOMMENDED)
git commit --no-verify

# Skip specific audit (configure in .pre-commit-config.yaml)
SKIP=bun-audit git commit
```

## 📊 Security Metrics

Track security health with these metrics:

- **Vulnerability Count**: Number of known vulnerabilities
- **Severity Distribution**: High, moderate, low severity issues
- **Resolution Time**: Time to fix discovered vulnerabilities
- **Dependency Freshness**: Age of dependencies and available updates

## 🔄 Regular Maintenance

### Weekly Tasks
- [ ] Run comprehensive security audit: `bun run security:check`
- [ ] Check for dependency updates: `bun update --dry-run`
- [ ] Review security advisories for used packages

### Monthly Tasks
- [ ] Full dependency review and cleanup
- [ ] Security configuration review
- [ ] Update security tooling (pre-commit hooks, etc.)

### Quarterly Tasks
- [ ] Security audit of the entire application
- [ ] Review and update security policies
- [ ] Training on new security practices

---

## 📞 Support

For security-related questions or issues:

1. **Internal**: Contact the development team
2. **Dependencies**: Check package repository issues
3. **Critical**: Follow responsible disclosure practices for vulnerabilities

**Remember: Security is everyone's responsibility! 🔐**