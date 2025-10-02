import React from 'react';
import {Badge} from '../Badge';

// Mock the class-variance-authority to test component structure
const mockSpan = (config) => {
  return (props) => {
    // Simulate the cva behavior
    const baseClass = "span";
    const intentClasses = {
      primary: "bg-light-primary text-primary",
      success: "bg-light-success text-success", 
      warning: "bg-light-warning text-warning",
      danger: "bg-light-danger text-danger"
    };
    const sizeClasses = {
      medium: "py-1 sm:py-2 px-2 sm:px-4 font-Estedad-Medium text-[10px] sm:text-xs"
    };
    const roundedClasses = {
      full: "rounded-full"
    };
    
    const intent = props.intent || 'primary';
    const size = props.size || 'medium';
    const rounded = props.rounded || 'full';
    const className = props.className || '';
    
    return [baseClass, intentClasses[intent], sizeClasses[size], roundedClasses[rounded], className].filter(Boolean).join(' ');
  };
};

describe('Badge component', () => {
  it('should be a function', () => {
    expect(typeof Badge).toBe('function');
  });

  it('should render with correct props structure', () => {
    const props = { className: "primary", children: "آنلاین کار کن" };
    const element = Badge(props);
    
    // Check that it returns a React element
    expect(element).toBeTruthy();
    expect(element.type).toBe('span');
  });

  it('should handle different intent props', () => {
    const successBadge = Badge({ intent: "success", children: "کوتاه بودن" });
    const warningBadge = Badge({ intent: "warning", children: "زیبا بودن" });
    const dangerBadge = Badge({ intent: "danger", children: "فارسی بودن" });
    
    expect(successBadge.type).toBe('span');
    expect(warningBadge.type).toBe('span');
    expect(dangerBadge.type).toBe('span');
  });

  it('should accept additional props', () => {
    const badge = Badge({ 
      intent: "primary", 
      className: "extra-class",
      'data-testid': 'test-badge',
      children: "Test"
    });
    
    expect(badge.type).toBe('span');
    expect(badge.props['data-testid']).toBe('test-badge');
  });

  it('component structure validation', () => {
    // Test that the component can be created without errors
    const testCases = [
      { className: "primary", children: "آنلاین کار کن" },
      { className: "primary medium full", children: "آنلاین کار کن" },
      { intent: "success", children: "کوتاه بودن" },
      { intent: "warning", children: "زیبا بودن" },
      { intent: "danger", children: "فارسی بودن" }
    ];
    
    testCases.forEach((props, index) => {
      const badge = Badge(props);
      expect(badge).toBeTruthy();
      expect(badge.type).toBe('span');
      expect(badge.props.children).toBe(props.children);
    });
  });
});
