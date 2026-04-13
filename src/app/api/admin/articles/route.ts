import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/storage/database/supabase-client';

// 获取文章列表
export async function GET(request: NextRequest) {
  try {
    const client = getSupabaseClient();
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '10');
    
    const { data, error, count } = await client
      .from('articles')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range((page - 1) * pageSize, page * pageSize - 1);
    
    if (error) throw new Error(`查询失败: ${error.message}`);
    
    return NextResponse.json({
      success: true,
      data,
      total: count,
      page,
      pageSize
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 });
  }
}

// 创建文章
export async function POST(request: NextRequest) {
  try {
    const client = getSupabaseClient();
    const body = await request.json();
    
    const { data, error } = await client
      .from('articles')
      .insert({
        title: body.title,
        summary: body.summary,
        content: body.content,
        publish_time: body.publish_time,
        tags: body.tags || [],
        source: body.source,
        source_link: body.source_link
      })
      .select()
      .single();
    
    if (error) throw new Error(`创建失败: ${error.message}`);
    
    return NextResponse.json({
      success: true,
      data
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 });
  }
}
